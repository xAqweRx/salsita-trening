const USER_LISTS = [
    "Hannah Abbott",
    "Ludo Bagman",
    "Bathilda Bagshot",
    "Katie Bell",
    "Cuthbert Binns",
    "Phineas Nigellus",
    "Sirius Black",
    "Amelia Bones",
    "Susan Bones",
    "Terry Boot",
    "Lavender Brown",
    "Millicent Bulstrode",
    "Charity Burbage",
    "Frank Bryce",
    "Alecto Carrow",
    "Amycus Carrow",
    "Reginald Cattermole",
    "Cho Chang",
    "Penelope Clearwater",
    "Crabbe –",
    "Vincent Crabbe",
    "Colin Creevey",
    "Dennis Creevey",
    "Dirk Cresswell",
    "Barty Crouch",
    "John Dawlish",
    "Fleur Delacour",
    "Gabrielle Delacour",
    "Dedalus Diggle",
    "Amos Diggory",
    "Cedric Diggory",
    "Elphias Doge",
    "Antonin Dolohov",
    "Aberforth Dumbledore",
    "Albus Dumbledore",
    "Ariana Dumbledore",
    "Kendra Dumbledore",
    "Percival Dumbledore",
    "Dudley Dursley",
    "Marge Dursley",
    "Petunia Dursley",
    "Vernon Dursley",
    "Marietta Edgecombe",
    "Arabella Figg",
    "Argus Filch",
    "Justin Finch",
    "Seamus Finnigan",
    "Nicolas Flamel",
    "Mundungus Fletcher",
    "Filius Flitwick",
    "Cornelius Fudge",
];


export const fetchAll = async () => {
    return USER_LISTS;
};

export const fetchFiltered = async (input: string): Promise<string[]> => {
    return USER_LISTS.filter((searchElement) => {
        return searchElement.includes(input);
    })
}

export const fetchCharacterDetails = async (input: number): Promise<string> => {
    return USER_LISTS[input]
}