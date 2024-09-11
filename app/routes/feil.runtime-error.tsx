export default function Time() {
  const handleClick = () => {
    throw new Error("This is a runtime error!");
  };

  return (
    <div>
      <h1>Runtime error</h1>
      <button onClick={handleClick}>Click me to trigger an error</button>
    </div>
  );
}
