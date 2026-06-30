
"use client"

import { ApolloProvider as Provider } from "@apollo/client/react";
import { ReactNode } from "react";
import { createApolloClient } from "@/app/lib/ApolloClients";


export default function ApolloProvider({ children }: { children: ReactNode }) {
    const client = createApolloClient();
  
    return <Provider client={client}>{children}</Provider>;
  }
