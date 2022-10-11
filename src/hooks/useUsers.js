import axios from "axios";
import { useState } from "react";

const API = "https://users-crud1.herokuapp.com/users";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const clearErrors = () => {
    setErrors([]);
  };

  const get = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${API}/`);

      setUsers(data);

      return true;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const create = async (user) => {
    try {
      setLoading(true);
      const { data } = await axios.post(`${API}/`, user);

      setUsers([...users, data]);

      return true;
    } catch (error) {
      if (error.name == "AxiosError") {
        const { status, data } = error.response;

        // Bad Request
        if (status == 400) {
          const errors = Object.entries(data);
          setErrors(errors);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const update = async (user) => {
    try {
      setLoading(true);
      const { data } = await axios.put(`${API}/${user.id}/`, user);

      setUsers(users.map((user) => (user.id == data.id ? data : user)));

      return true;
    } catch (error) {
      if (error.name == "AxiosError") {
        const { status, data } = error.response;

        // Bad Request
        if (status == 400) {
          const errors = Object.entries(data);
          setErrors(errors);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const remove = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API}/${id}/`);

      setUsers(users.filter((user) => user.id != id));

      return true;
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    users,
    errors,
    loading,
    get,
    create,
    update,
    remove,
    clearErrors,
  };
}
