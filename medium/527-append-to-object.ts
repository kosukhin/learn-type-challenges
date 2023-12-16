type AppendToObject<T, U extends keyof any, V> = {
  [K in keyof T | U]: K extends keyof T ? T[K] : V;
};

type test1 = {
  key: "cat";
  value: "green";
};

type testExpect1 = {
  key: "cat";
  value: "green";
  home: boolean;
};

type test2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
};

type testExpect2 = {
  key: "dog" | undefined;
  value: "white";
  sun: true;
  home: 1;
};

type test3 = {
  key: "cow";
  value: "yellow";
  sun: false;
};

type testExpect3 = {
  key: "cow";
  value: "yellow";
  sun: false;
  moon: false | undefined;
};

type one = AppendToObject<test1, "home", boolean>;
type two = AppendToObject<test2, "home", 1>;
type three = AppendToObject<test3, "moon", false | undefined>;
