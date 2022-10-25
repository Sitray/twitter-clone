import Button from '../../../components/Button/Button';

export default function Tweet() {
  return (
    <>
      <form action="">
        <textarea
          placeholder="¿Qué está pasando?"
          className=" w-full border-0 text-lg p-4 resize-none outline-0 min-h-200"
        ></textarea>
        <div className="p-4">
          <Button>Twittear</Button>
        </div>
      </form>
    </>
  );
}
