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
    //TODO: Styling
    <div className="h-12 sticky top-0 rounded-b-sm border-b-2 border-black items-center w-full flex mt-4">
      <nav className="flex flex-row items-center mx-4 mb-4">
        <div className="mr-3">
          <Avatar image={avatar} alt={altImage} />
        </div>
        <h2 className="font-extrabold text-lg">{text}</h2>
      </nav>
    </div>
  );
}

//TODO: Check if we need to get info from props or from the API
export async function getStaticProps() {}
