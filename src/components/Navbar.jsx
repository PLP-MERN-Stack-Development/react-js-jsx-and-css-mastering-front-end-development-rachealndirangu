export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white flex justify-between items-center px-6 py-4 shadow-md">
      <h1 className="font-bold text-xl">React Tailwind App</h1>
      <ul className="flex space-x-4">
        <li className="hover:text-gray-200 cursor-pointer">Home</li>
        <li className="hover:text-gray-200 cursor-pointer">Tasks</li>
        <li className="hover:text-gray-200 cursor-pointer">API Data</li>
      </ul>
    </nav>
  );
}
