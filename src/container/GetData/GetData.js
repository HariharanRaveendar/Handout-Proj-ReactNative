import {AsyncStorage} from 'react-native';

export const GetFoodData = async (x) => {
    var sData = {};
    try {

        let URL = 'http://handout.pythonanywhere.com/api/donate/DonateFood/';
        var response = await fetch(URL);
        sData = await response.json()
        return sData;
    }
    catch
    {
        sData = {};
        return sData;

    }
}

export const GetBookData = async (x) => {
    var sData = {};
    try {

        let URL = 'http://handout.pythonanywhere.com/api/donate/DonateBook/';
        var response = await fetch(URL);
        sData = await response.json()
        return sData;
    }
    catch
    {
        sData = {};
        return sData;

    }
}

export const GetClothData = async (x) => {
    var sData = {};
    try {

        let URL = 'http://handout.pythonanywhere.com/api/donate/DonateCloth/';
        var response = await fetch(URL);
        sData = await response.json()
        return sData;
    }
    catch
    {
        sData = {};
        return sData;

    }
}
