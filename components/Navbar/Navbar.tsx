import Image from "next/image";

//TODO: Move to a proper interface
interface NavbarProps {
  avatar: string;
  altImage: string;
  userName: string;
}

export default function Navbar({ avatar, altImage, userName }: NavbarProps) {
  return (
    //TODO: Styling
    <>
      <nav className="flex static bg-transparent bor ">
        <div>
          <Image src={avatar} alt={altImage} width="150" height="150"></Image>
          {userName}
        </div>
      </nav>
    </>
  );
}

//TODO: Check if we need to get info from props or from the API
export async function getStaticProps() {}
