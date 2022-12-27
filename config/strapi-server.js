module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,

    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_okAyky3rQArZi0MvE25fvh0sSSWT/HnC80EvxWb",
      apiToken: "HHJejqqOEEC2HWtBRlYqxO8M",
      appFilter: "prj_okAyky3rQArZi0MvE25fvh0sSSWT",
      teamFilter: "team_2BrRD55mB9oPquhBz3YCBXVh",
      role: ["strapi-super-admin"],
    },
  },
});

//create an array of 4 random fruits
const fruits = ["apple", "banana", "orange", "pear"];


//create a function to get a random fruit
const getRandomFruit = () => {
  return fruits[Math.floor(Math.random() * fruits.length)];
};