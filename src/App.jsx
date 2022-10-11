import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useUsers } from "./hooks/useUsers";
import Modal from "./components/Modal";
import Confirmation from "./components/Confirmation";
import UserForm from "./components/Users/Form";
import UserList from "./components/Users/List";
import { Empty } from "./components/Empty";
import "./App.css";

function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConfirmation, setIsConfirmation] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const { loading, create, get, remove, update, errors, clearErrors, users } =
    useUsers();

  useEffect(() => {
    get();
  }, []);

  const handleCreate = (user) => {
    (async function () {
      const isCreated = await create(user);

      if (isCreated) {
        setIsCreateModalOpen(false);
        clearErrors();
      }
    })();
  };

  const setToEdit = (user) => {
    setSelectedUser(user);
    setIsUpdateModalOpen(true);
  };

  const handleUpdate = (user) => {
    (async function () {
      const isUpdated = await update(user);

      if (isUpdated) {
        setIsUpdateModalOpen(false);
        clearErrors();
      }
    })();
  };

  const setToRemove = (user) => {
    setSelectedUser(user);
    setIsConfirmation(true);
  };

  const handleRemove = ({ id }) => {
    (async function () {
      const isRemoved = await remove(id);

      if (isRemoved) {
        setIsConfirmation(false);
        clearErrors();
      }
    })();
  };

  return (
    <main className="main__wrapper container">
      <header className="main__header">
        <h1 className="main__title">Users</h1>
        <button
          className="main__cta"
          onClick={() => setIsCreateModalOpen(true)}
        >
          <FontAwesomeIcon icon={faPlus} className="icon" />
          Create new user
        </button>
      </header>

      <section>
        {users.length ? (
          <UserList values={users} edit={setToEdit} remove={setToRemove} />
        ) : (
          <Empty />
        )}

        <Modal
          close={() => setIsCreateModalOpen(false)}
          isOpen={isCreateModalOpen}
        >
          <UserForm errors={errors} submit={handleCreate} isLoading={loading} />
        </Modal>

        <Modal
          close={() => setIsUpdateModalOpen(false)}
          isOpen={isUpdateModalOpen}
        >
          <UserForm
            initial={selectedUser}
            errors={errors}
            submit={handleUpdate}
            isLoading={loading}
          />
        </Modal>

        <Modal close={() => setIsConfirmation(false)} isOpen={isConfirmation}>
          <Confirmation
            accept={() => handleRemove(selectedUser)}
            title="Delete User"
            description={`Do you want to delete ${selectedUser.first_name} ${selectedUser.last_name}?`}
          />
        </Modal>
      </section>
    </main>
  );
}

export default App;
