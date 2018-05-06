$(function(){

    var pokUrl = 'https://pokeapi.co/api/v2/pokemon/2';
    var evolUrl = 'https://pokeapi.co/api/v2/evolution-chain/2/';
    var evolChain = $('.evolution-chain');
    var name = $('h1');
    var hp = $('ul li').first();
    var attack = $('ul li').eq(1);
    var defense = $('ul li').last();

    function loadPok(){
        $.ajax({
            url: pokUrl,
            dataType: 'json'
        }).done(function(response){
            console.log(response);
            createPok(response);
        }).fail(function(error){
            console.log(error);
        })
    }
    loadPok();

    function createPok(pok){
        var nameSpan = $('<span>').text(pok.name);
        var hpSpan = $('<span>').text(pok.stats[5].base_stat);
        var attackSpan = $('<span>').text(pok.stats[4].base_stat);
        var defenseSpan = $('<span>').text(pok.stats[3].base_stat);

        name.append(nameSpan);
        hp.append(hpSpan);
        attack.append(attackSpan);
        defense.append(defenseSpan);
    }

    function loadEvol(){
        $.ajax({
            url: evolUrl,
            dataType: 'json'
        }).done(function(response){
            console.log(response);
            evolPok(response.chain);
        }).fail(function(error){
            console.log(error);
        })

    }
    loadEvol();

    function evolPok(pok){
        var evol1 = $('<span>').text(pok.evolves_to[0].evolves_to[0].species.name);
        var evol2 = $('<span>').text(pok.evolves_to[0].species.name);
        var evol3 = $('<span>').text(pok.species.name);

        evolChain.append(evol1);
        evolChain.append(evol2);
        evolChain.append(evol3);
    }
})
