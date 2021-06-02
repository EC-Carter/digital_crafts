let log = {
    firstName: 'Kanye',
    lastName: 'West',
    age : 40,

    info: function(info){
        console.log(`Info: ${info}`);
    },

    warning: function(warning){
        console.log(`Warning: ${warning}`);
    },

    error: function(error){
        console.log(`Error: ${error}`);
    }
};

module.exports = log;


//log.info('value') to run the function stored with the key info