"use client";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form, Button, InputGroup } from "react-bootstrap";

const schema = yup.object({
  city: yup
    .string()
    .trim()
    .required("Enter a city name"),
}).required();

export default function SearchForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });
}