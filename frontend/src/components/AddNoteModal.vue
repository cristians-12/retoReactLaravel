<template>
    <div
        class="backdrop-blur-md bg-yellow-600 flex flex-col gap-5 rounded-lg p-5"
      >
        <div>
          <input
            class="w-60 border border-gray-700 px-5 p-2 rounded-xl"
            type="text"
            placeholder="Añadir nombre nota"
          />
        </div>
        <div>
          <input
            class="w-60 border border-gray-700 px-5 p-2 rounded-xl"
            type="text"
            placeholder="Añadir descripcion"
          />
        </div>
        <div
          class="bg-orange-600 rounded-xl px-5 text-center text-white py-2 cursor-pointer hover:scale-105"
        >
          Guardar nota
        </div>
      </div>
</template>