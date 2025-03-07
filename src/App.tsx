// src/App.tsx
import React from 'react'; // Importa a biblioteca React
import './App.css'; // Importa o CSS do componente App

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">Trabalho Web</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-500">Home</a></li>
              <li><a href="#" className="hover:text-blue-500">Sobre</a></li>
              <li><a href="#" className="hover:text-blue-500">Contato</a></li>
            </ul>
            <i className="bi bi-person-circle text-white text-2xl"></i>
          </nav>
        </div>
      </header>

      <section className="banner bg-gray-500 h-96 flex items-center justify-center">
        {/* Conteúdo do banner aqui */}
      </section>

      <section className="content bg-blue-700 w-4/5 mx-auto h-[800px]">
        {/* Conteúdo principal aqui */}
      </section>

      <footer className="bg-gray-800 text-white py-4 text-center">
        {/* Conteúdo do rodapé aqui */}
      </footer>
    </>
  );
}

export default App;