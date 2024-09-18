import { MdAddCircleOutline } from "react-icons/md";
import Layout from "../components/Layout";
import { useState } from "react";
import CreateUserModal from "../components/CreateUserModal";
import DefineRoles from "../components/DefineRoles";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Layout>
      {/* Header Section */}
      <header className="text-gray-900 py-2 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold tracking-wide">Manage users</h1>
        <p className="mt-1 text-xs text-gray-500 border-b pb-2">
          Here you can manage users
        </p>
      </header>

      <div className="text-gray-900 py-2 sm:px-6 lg:px-8 mb-3 flex flex-col-reverse lg:flex-row justify-end items-start lg:items-center gap-2">
        <button
          onClick={() => setOpenModal(true)}
          className="py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded border border-gray-200 bg-gray-950 text-white shadow-sm hover:bg-gray-800 focus:outline-none  disabled:pointer-events-none "
        >
          <MdAddCircleOutline size={20} />
          Create user
        </button>
      </div>
      <div className="mx-auto sm:px-6 lg:px-8">
        <DefineRoles />
      </div>

      {/* Create user modal */}

      <div>{openModal && <CreateUserModal setOpenModal={setOpenModal} />}</div>
    </Layout>
  );
};

export default Users;
