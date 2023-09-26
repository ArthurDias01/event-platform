import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full py-5 mx-auto flex items-center justify-center bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  )
}
