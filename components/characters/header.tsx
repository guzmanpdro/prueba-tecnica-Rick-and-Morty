export default function Header() {
    return(
        <header>
            <form className="bg-neutral-200 rounded">
                <h2 className="text-2xl text-neutral-800 pl-6 pt-6">Filtros</h2>
                <div className="grid gap-6 mb-6 md:grid-cols-4 md:p-6">
                    <div>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Rick Sanchez, Morty Smith, etc..."/>
                    </div>
                    <div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Especie</option>
                            <option value="Human">Humano</option>
                            <option value="Alien">Alien</option>
                        </select>
                    </div>
                    <div>
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Género</option>
                            <option value="female">Femenino</option>
                            <option value="male">Masculino</option>
                            <option value="genderless">Sin género</option>
                            <option value="unknow">Desconocido</option>
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-neutral-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Filtrar</button>
                </div>
            </form>
        </header>
    );
}