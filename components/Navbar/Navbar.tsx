import Image from 'next/image';
import Avatar from '../Avatar/Avatar';

//TODO: Move to a proper interface
interface NavbarProps {
  avatar: string;
  altImage: string;
  text: string;
}

export default function Navbar({ avatar, altImage, text }: NavbarProps) {
  return (
    <header className="h-16 sticky top-0 rounded-b-sm border-b-2 border-b-gray-300 items-center w-full flex bg-transparent backdrop-blur">
      <nav className="flex flex-row items-center mx-4 mb-4 mt-4 sticky">
        <div className="mr-3">
          <Avatar image={avatar} alt={altImage} />
        </div>
        <h2 className="font-extrabold text-lg">{text}</h2>
      </nav>
    </header>
  );
}
