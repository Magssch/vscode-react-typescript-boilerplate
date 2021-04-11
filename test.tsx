import React, { useState, useEffect } from "react";

interface TestProps {
  input: string;
}

const Test: React.FC<TestProps> = ({ input }) => {
  const [myState, setMyState] = useState<string>(input);
  useEffect(() => {
    setMyState(input);
  }, [input]);

  return <>Hello world!</>;
};

export default Test;
