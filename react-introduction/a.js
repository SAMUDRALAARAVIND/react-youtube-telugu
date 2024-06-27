export function x() {
  console.log("inside x");
}

export function y() {
  console.log("inside y");
}

const hello = () => {
  console.log("Hello programmers");
};

export default hello;
/**
    named export  => we can have any number of named exports from a module
    default export  => we can atmost one default export from a module
 */
