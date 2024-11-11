function Footer({ children }) {
  return (
    <div className="h-96 w-full bg-blue-400 flex justify-center items-center">
      <div className="flex flex-col items-center justify-around w-1/2  h-full pb-11 pt-8 text-blue-950">
        <h1 className="text-5xl">Maximo</h1>
        {children}
        <p>Maximo Brito. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
