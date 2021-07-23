import React, { useState } from "react";

function Test() {
  return (
    <div>
      <form runat="server">
        <input accept="image/*" type="file" id="imgInp" onchange={anwar} />
        <img id="blah" src="#" alt="your image" />
      </form>
    </div>
  );
}

export default Test;
