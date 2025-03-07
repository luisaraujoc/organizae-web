function LogInView() {
    return (
        <div className="flex justify-center items-center bg-gray-600 h-screen w-full">
            <div className="flex justify-center items-center bg-white box-content h-96 w-80 rounded-lg shadow-lg">
                <div className="grid">
                    <div className="mx-4 my-4">
                        <h1 className="text-4xl font-bold my-6">LogInView</h1>
                        <form action="" method="post">
                            <div className="my-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                                <input placeholder="email@mail.com" type="email" name="email" id="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                            </div>
                            <div className="my-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                                <input placeholder="password" type="password" name="password" id="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                                <div className="text-right">
                                    <a href="#" className="text-blue-500">Esqueceu a senha?</a>
                                </div>
                            </div>
                            <div className="my-4 flex justify-center">
                                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Entrar</button>
                            </div>
                            <div className="my-4 flex flex-col items-center">
                                <span className="text-gray-700">Não tem uma conta?</span>
                                <a href="/register" className="text-blue-500">Crie sua conta</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogInView;