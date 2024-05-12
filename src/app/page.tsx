"use client";

import BookList from "@/components/BookList";
import Filters from "@/components/Filters";
import Layout from "@/components/Layout";
import { BookProvider } from "@/context/BookContext";
import { FormProvider, useForm } from "react-hook-form";
import { FormValue } from "./types";

export default function Home() {
  const methods = useForm<FormValue>();

  return (
    <Layout>
      <FormProvider {...methods}>
        <BookProvider>
          <Filters />
          <BookList />
        </BookProvider>
      </FormProvider>
    </Layout>
  );
}
