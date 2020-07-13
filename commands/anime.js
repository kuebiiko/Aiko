const fetch = require('node-fetch');
const Discord = require('discord.js');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);
const jikanjs  = require('jikanjs'); // Uses per default the API version 3

module.exports = {
	name: 'anime',
    description: 'search something on urban dictionary',
    usage: 'l.dictionary <search term>',
	execute(message, args) {
            async function search() {
              
              jikanjs.search('anime', String(args[0]), 1, { limit: 1 })
                .then(function(response) {
                  console.log(response)
                
                  message.channel.send(response.results.mal_id)
                const myProcessedData = response.results.map(function(result) {
                  return {
                    mal_id: result.mal_id,
                    title: result.title,
                    episodes: result.episodes,
                    synopsis: result.synopsis
                  }
                message.channel.send(JSON.stringify(myProcessedData))
                });
              })
   
            }


            search();



  },
};

