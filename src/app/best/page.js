"use client";

import Filters from "@/components/Filters";
import Layout from "@/components/Layout";
import { BestBookProvider } from "@/context/BestBookContext";
import { FormProvider, useForm } from "react-hook-form";
import BookList from "./BookList";

export default function Best() {
  const methods = useForm();

  return (
    <Layout>
      <FormProvider {...methods}>
        <BestBookProvider>
          <Filters />
          <BookList />
        </BestBookProvider>
      </FormProvider>
    </Layout>
  );
}
