"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [role, setRole] = useState("usuario");

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="bg-[#111111] border border-red-700 rounded-2xl shadow-[0_0_30px_#ff000080] w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-4">
          <Image src="/img1.webp" alt="Metro Logo" width={64} height={64} />
          <h1 className="text-2xl font-bold text-red-500 text-center drop-shadow-[0_0_5px_#ff0000]">
            Acceso al Portal del Metro del grupo de sistemas 902
          </h1>
          <p className="text-sm text-red-300">Selecciona tu rol e inicia sesión</p>
        </div>

        <form className="flex flex-col space-y-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-red-400">Rol</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="bg-black text-red-200 border border-red-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="usuario">Usuario</option>
              <option value="admin">Administrador</option>
              <option value="operador">Operador</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-red-400">Correo</span>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="bg-black text-red-200 placeholder-red-500 border border-red-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-red-400">Contraseña</span>
            <input
              type="password"
              placeholder="********"
              className="bg-black text-red-200 placeholder-red-500 border border-red-700 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition-all shadow-[0_0_10px_#ff0000] hover:shadow-[0_0_20px_#ff0000]"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center text-sm text-red-300">
          ¿Olvidaste tu contraseña?{" "}
          <a href="#" className="text-red-400 hover:underline">
            Recupérala
          </a>
        </div>
      </div>
    </div>
  );
}
