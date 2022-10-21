import Image from 'next/image';

interface AvatarProps {
  image: string;
  alt: string;
  width?: string;
  height?: string;
  withText: boolean;
  text: string;
}

export default function Avatar({
  image,
  alt,
  width = '49',
  height = '49',
  withText,
  text,
}: AvatarProps) {
  return (
    <div className="flex items-center">
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full "
      />
      {withText && <strong className="ml-2">{text}</strong>}
    </div>
  );
}
