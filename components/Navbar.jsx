import Link from "next/link";
import Head from "next/head";
import api from "../services/Api";
import { useAuth } from "./contexts/auth";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Navbar() {
  return (
    <>
      <Head>
        <title>LapanganID</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="icon.svg" />
      </Head>
      <nav className="wrapper">
        <section className="mx-auto text-[#555555] py-[60px]">
          <div className="flex items-center gap-[185px]">
            <div className="flex items-center gap-11">
              <img src="ellipse.svg" alt="" />
              <Link href="/">Home</Link>
              <Link href="/schedule">Schedule</Link>
              <Link href="/lapangan">Lapangan</Link>
              <Link href="/komunitas">Komunitas</Link>
              <Link href="/riwayat">Riwayat</Link>
            </div>
            <div className="flex items-center gap-[35px]">
              <div className="flex items-center justify-center px-4">
                <div className="relative mr-3">
                  <input
                    type="search"
                    className="text-gray-900 bg-white border-gray-300 block w-[321px] rounded-[20px] border pl-[35px] focus:outline-none"
                    placeholder="Cari aja disini..."
                  />
                  <div className="absolute top-1/2 right-[22px]  -translate-y-1/2 transform">
                    <img
                      src="search.svg"
                      alt=""
                      className="h-[16px] w-[16px]"
                    />
                  </div>
                </div>
              </div>
              <LoginModal />
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("login");
  const { login, user } = useAuth();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      await login(username, password);

      closeModal()
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      {
        user == null && (
          <button type="button" onClick={openModal} className="">
            Login
          </button>
        )
      }

      {
        user && (
          <button type="button" className="">
            Halo, {user.username}
          </button>
        )
      }

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[378px] transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-[#91D36E] items-center justify-center pt-[50px] px-[24px] text-5xl"
                  >
                    Lapangan.id
                  </Dialog.Title>
                  {tab === "login" ? (
                    <div className="flex flex-col">
                      <form
                        className="mt-2 flex flex-col"
                        onSubmit={handleLogin}
                      >
                        <h1 className="text-left text-[#91D36E] mt-[43px] mb-3">
                          Username
                        </h1>
                        <input
                          className="border border-[#91D36E] rounded-[10px]"
                          type="text"
                          placeholder=""
                          name="username"
                          required
                        />
                        <h1 className="text-left text-[#91D36E] mt-3 mb-3">
                          Password
                        </h1>
                        <input
                          className="border border-[#91D36E] rounded-[10px]"
                          type="password"
                          placeholder=""
                          name="password"
                          required
                        />
                        <button
                          className="border border-[#91D36E] text-white bg-[#91D36E] rounded-[10px] mt-[53px] mb-[25px]"
                          type="submit"
                        >
                          Masuk
                        </button>
                        <button
                          className="border border-[#91D36E] text-[#91D36E] rounded-[10px] mb-[26px]"
                          type="button"
                          onClick={() => setTab("register")}
                        >
                          Daftar
                        </button>
                        <button
                          className="text-[#91D36E] rounded-[10px] mb-[46px]"
                          type="submit"
                        >
                          Lupa Password
                        </button>
                      </form>
                    </div>
                  ) : tab === "register" ? (
                    <div className="flex flex-col">
                      <form className="mt-2 flex flex-col">
                        <h1 className="text-left text-[#91D36E] mt-[43px] mb-3">
                          E-mail
                        </h1>
                        <input
                          className="border border-[#91D36E] rounded-[10px]"
                          type="email"
                          placeholder=""
                          required
                        />
                        <h1 className="text-left text-[#91D36E] mt-3 mb-3">
                          Username
                        </h1>
                        <input
                          className="border border-[#91D36E] rounded-[10px]"
                          type="text"
                          placeholder=""
                          required
                        />
                        <h1 className="text-left text-[#91D36E] mt-3 mb-3">
                          Password
                        </h1>
                        <input
                          className="border border-[#91D36E] rounded-[10px] mb-10"
                          type="password"
                          placeholder=""
                          required
                        />
                        <button
                          className="border border-[#91D36E] text-white bg-[#91D36E] rounded-[10px] mb-[26px]"
                          type="button"
                          onClick={() => setTab("register")}
                        >
                          Daftar
                        </button>
                        <button
                          className="border border-[#91D36E] text-[#91D36E] rounded-[10px]"
                          type="button"
                          onClick={() => setTab("login")}
                        >
                          Masuk
                        </button>
                      </form>
                    </div>
                  ) : null}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
