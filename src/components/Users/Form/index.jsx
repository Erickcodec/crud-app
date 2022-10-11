import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./index.css";
import Loading from "../../Loading";

export default function UserForm({
  initial = {},
  errors = [],
  submit = (user) => {},
  isLoading = false,
}) {
  const { register, handleSubmit, reset, formState, setError, clearErrors } =
    useForm();

  // when component mounted
  useEffect(() => {
    reset(initial);

    // when component dismounted
    return () => {
      clearErrors();
    };
  }, []);

  // External errors
  useEffect(() => {
    errors.map(function ([path, errors]) {
      setError(path, { message: errors[0] }, { shouldFocus: true });
    });
  }, [errors]);

  const onSubmit = (data) => {
    try {
      submit(data);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__wrapper">
        <h2 className="form__title">New User</h2>

        <div className="form-group">
          <label htmlFor="first_name" className="form-label">
            first name
          </label>
          <input
            type="text"
            id="first_name"
            className="form-control"
            placeholder="Nombre"
            {...register("first_name", {})}
          />
          <ErrorMessage
            render={({ message }) => <p className="form-error">{message}</p>}
            errors={formState.errors}
            name="first_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="last_name" className="form-label">
            last name
          </label>
          <input
            type="text"
            id="last_name"
            className="form-control"
            placeholder="Apellidos"
            {...register("last_name", {})}
          />
          <ErrorMessage
            render={({ message }) => <p className="form-error">{message}</p>}
            errors={formState.errors}
            name="last_name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="Correo"
            {...register("email", {})}
          />
          <ErrorMessage
            render={({ message }) => <p className="form-error">{message}</p>}
            errors={formState.errors}
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Contraseña"
            {...register("password", {})}
          />
          <ErrorMessage
            render={({ message }) => <p className="form-error">{message}</p>}
            errors={formState.errors}
            name="password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="birthday" className="form-label">
            birth
          </label>
          <input
            type="date"
            id="birthday"
            className="form-control"
            placeholder="Cumpleaños"
            {...register("birthday", {})}
          />
          <ErrorMessage
            render={({ message }) => <p className="form-error">{message}</p>}
            errors={formState.errors}
            name="birthday"
          />
        </div>

        <div className="form-group">
          {isLoading ? (
            <Loading width={48} />
          ) : (
            <button type="submit" className="form-submit" disabled={isLoading}>
              Save
            </button>
          )}
        </div>
      </div>
    </form>
  );
}
