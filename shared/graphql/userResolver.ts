
import blogmodel from "../database/model/blog.model";
import cloudinary from "../lib/cloudinary";
import { usermodel } from "../database/model/user.model";


type contexttype ={
  user?: {
    email:string
    id: string
    iat: number
  }
}

type blog = {
    title:string
    content:string
    excerp:string
    author:string
    category:string
    image:string
}
export const blogresolvers = {
  Query: {
   allblog:async(_: unknown,{page, limit}:{page:number, limit:number})=>{
    console.log(page);
    console.log(limit);
    const skip = (page - 1) * limit
     const total =  await blogmodel.countDocuments()
      const totalpages = Math.ceil(total / limit)      
     const allblog = await blogmodel.find().skip(skip).limit(limit)
      return allblog
   }
  },
  Mutation:{
     addblog: async(_: unknown, param:blog, context:contexttype)=>{
        try {

          const {user}  = context
          console.log(user);
          if (!user) {
             throw new Error("invalid user")
          }
          const {title, content,excerp,author, category, image} = param
           if (!title || !content || !excerp || !category || !image || !author) {
             throw new Error("All fields are mandatoy")
           }
          const uploaded =  await cloudinary.uploader.upload(image) 
          if (uploaded) {
           const newBlog =  await blogmodel.create({
             ...param,
             image:uploaded.secure_url })
            return newBlog
           }
        } catch (error) {
          if (error instanceof Error) {
             throw new Error(error?.message)
          }
        }
     },
     deleteblog: async (_: unknown, param: {id:string},context:contexttype) =>{
      try {
         const {user}  = context
          console.log(user);
          if (!user) {
             throw new Error("invalid user")
          }
         const oneuser =  await usermodel.findById(user?.id)
         console.log(oneuser);
         
          const deleteblog = await blogmodel.findOneAndDelete({_id:param?.id, author:oneuser?.name })
          console.log(deleteblog);
          
        return deleteblog
      } catch (error) {
         if (error instanceof Error) {
             throw new Error(error?.message)
          }
      }
     }

  }
};