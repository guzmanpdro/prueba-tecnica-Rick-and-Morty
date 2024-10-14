'use client'

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { authenticate } from "@/lib/actions";
import { useFormState } from "react-dom";

export default function LoginForm() {
    const [errorMessage, formAction, isPending] = useFormState(
        authenticate,
        undefined
    )

    return (
        <div className="p-6 space-y-4 rounded-lg shadow md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Inicia sesión en tu cuenta
                </h1>
                <form className="space-y-4 md:space-y-6" action={formAction}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required value="user@nextmail.com" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value="$2b$10$2bkVX1AEU9AD3Co/vQ0BxuG4YJdWA.ryjwPdLy21nhzf7WKYlSJ4." required />
                    </div>
                    <Button type="submit" className="w-full" aria-disabled={isPending}>Iniciar sesión</Button>
                    <div
                        className="flex h-8 items-end space-x-1"
                        aria-live="polite"
                        aria-atomic="true"
                        >
                        {errorMessage && (
                            <>
                            <p className="text-sm text-red-500">Correo electrónico o contraseña incorrecta</p>
                            </>
                        )}
                    </div>
                </form>
            </div>
    );
}