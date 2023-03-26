export default function ModalItem({onClose}) {
  return (
    <>
      <form class="rounded px-2 pt-2 pb-2 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="firstName">
            First Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
            Last Name
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            placeholder="lastName"
          />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="lastName">
            Enter cloth Description
          </label>
          <textarea
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="clothDescription"
            type="text"
            placeholder="clothDescription"
          />
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClose}
          >
            Add Item
          </button>
        </div>
      </form>
    </>
  );
}
