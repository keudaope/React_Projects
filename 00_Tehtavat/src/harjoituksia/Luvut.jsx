import { useState, useEffect } from "react";
const Luvut = () => {
  const luvut = [1, 2, 3, 4, 5];
  return (
    <div>
      {luvut.map((luku) => (
        <p>{luku}</p>
      ))}
    </div>
  );
};

export default Luvut;
