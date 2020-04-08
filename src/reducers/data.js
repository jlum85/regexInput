export const data = [
  {
    name: "username",
    label: "Login",
    placeholder: "username",
    pattern: /^[a-z\d]{5,12}$/i,
    description: "Entre 5 - 12 caractères",
    patternDetail: [
      {
        pattern: /[^a-z\d]/i,
        message: "Uniquement des caractères alphanumériques",
        expected: false,
      },
      {
        pattern: /^.{5,12}$/,
        message: "Entre 5 et 12 caractères",
        expected: true,
      },
    ],
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
    // pour enlever le warning infondé :  Unnecessary escape character: \.
    // eslint-disable-next-line
    pattern: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    description: "Email doit être une adresse valide, ex:  me@mydomain.com",
  },
  {
    name: "password",
    label: "Mot de passe",
    placeholder: "Mot de passe",
    type: "password",
    pattern: /^[\d\w@-]{8,20}$/i,
    description:
      "Contenu alphanumérique (@, _ et - autorisés) et longeur entre 8-20",
    patternDetail: [
      {
        pattern: /[^\d\w@-]/i,
        message: "Uniquement des caractères alphanumériques et @, -, _",
        expected: false,
      },
      {
        pattern: /^.{8,20}$/,
        message: "Entre 8 et 20 caractères",
        expected: true,
      },
    ],
  },
  {
    name: "phone",
    label: "Téléphone",
    placeholder: "Téléphone",
    pattern: /^\d{11}$/,
    description: "Un téléphone valide contient 10 chiffres",
    patternDetail: [
      {
        pattern: /[^\d]/,
        message: "Uniquement des chiffres",
        expected: false,
      },
      {
        pattern: /^.{10}$/,
        message: "10 caractères",
        expected: true,
      },
    ],
  },
  {
    name: "slug",
    label: "Identifiant",
    placeholder: "Identifiant",
    pattern: /^[a-z\d-]{8,20}$/,
    description:
      "Uniquement des lettres miniscules, des nombres et -, longeur entre 8-20",
  },
];
