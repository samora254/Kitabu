import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Header */}
        <header className="bg-gray-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              <span className="text-white">KITABU</span>
              <span className="text-[#FF69B4]">.AI</span>
            </span>
            <span className="ml-2 bg-gray-700 px-2 py-1 rounded text-sm">GRADE 6</span>
          </div>
          <div className="flex space-x-4">
            <button className="text-white">🔔</button>
            <button className="text-white">👤</button>
          </div>
        </header>

        {/* Banner */}
        <div className="p-4">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 text-white">
            <h2 className="text-xl font-bold">Homework is Easy and Fun!</h2>
            <p>With Kitabu AI</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 grid grid-cols-3 gap-4">
          <button className="flex flex-col items-center">
            <span className="text-2xl">📚</span>
            <span className="text-sm">E-Books</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-2xl">🎧</span>
            <span className="text-sm">Audio Books</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="text-2xl">↗️</span>
            <span className="text-sm">Share</span>
          </button>
        </div>

        {/* Subject Grid */}
        <div className="p-4 grid grid-cols-2 gap-4">
          <button className="bg-red-400 text-white p-4 rounded-lg">
            Mathematics
          </button>
          <button className="bg-green-400 text-white p-4 rounded-lg">
            English
          </button>
          <button className="bg-blue-400 text-white p-4 rounded-lg">
            Kiswahili
          </button>
          <button className="bg-orange-700 text-white p-4 rounded-lg">
            Science
          </button>
          <button className="bg-yellow-500 text-white p-4 rounded-lg">
            Social
          </button>
          <button className="bg-gray-800 text-white p-4 rounded-lg flex items-center justify-center">
            <span className="mr-2">🎮</span>
            PLAY QUIZ
          </button>
        </div>

        {/* Homework Help */}
        <div className="p-4">
          <p className="text-gray-600 mb-2">Need help With Homework?</p>
          <div className="flex items-center bg-gray-100 rounded-full p-2">
            <button className="p-2">📎</button>
            <input
              type="text"
              placeholder="Ask me anything."
              className="flex-1 bg-transparent border-none focus:outline-none px-2"
            />
            <button className="p-2">🎤</button>
            <button className="p-2">📤</button>
          </div>
        </div>
      </div>
    </div>
  );
}