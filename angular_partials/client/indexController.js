/**
 * Created by danielscott on 3/17/17.
 */

let app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "partials/userManagerPartial.html"
        })
        .when("/all", {
            templateUrl: "partials/userListPartial.html"
        })
        .otherwise({
            redirectTo: "/users"
        });
});

app.factory("userFactory",[function(){
    let factory = {};

    factory.users = allUsers;

    factory.returnUsers = function () {
        return factory.users;
    };

    factory.createUser = function (userObj) {
            console.log(userObj);
            allUsers.push(userObj);
    };

    factory.deleteUser = function (userObj) {
        factory.users.splice(factory.users.indexOf(userObj), 1)
    };

    return factory;
}]);

// This is for the list of users
app.controller("allUsersController",['userFactory', function(userFactory){
    this.users = userFactory.returnUsers();
}]);

// This is for managing users
app.controller("usersController", ['$scope', 'userFactory', function($scope, userFactory){

    this.users = userFactory.returnUsers();
    this.newUser = {};

    this.removeUser = function (userObj) {
        userFactory.deleteUser(userObj);
    };

    this.createUser = function () {
        userFactory.createUser(this.newUser);
        this.newUser = {}
    };

}]);




// User List

let allUsers = [
    {
        "id": "58cc6b225799b75dcec20931",
        "firstName": "Bartlett",
        "lastName": "Nunez",
        "favorite": "Stevens",
        "company": "EGYPTO",
        "phone": "+1 (805) 428-2970",
        "about": "Et ullamco commodo in labore occaecat pariatur excepteur ea. Commodo do minim et magna. Nisi nulla officia ipsum enim officia. Enim elit incididunt consectetur elit fugiat ipsum excepteur fugiat aute ad. Culpa adipisicing excepteur aliqua mollit sint quis eu id ullamco et ullamco incididunt. Nisi consectetur culpa qui cupidatat ex duis consectetur eiusmod laborum veniam.",
        "latitude": "4.326889",
        "longitude": "150.280711"
    },
    {
        "id": "58cc6b226f62cee69daa74f7",
        "firstName": "Porter",
        "lastName": "Montgomery",
        "favorite": "Fairmount",
        "company": "EMERGENT",
        "phone": "+1 (946) 536-2631",
        "about": "Enim dolor commodo id fugiat cillum consequat ea ad proident labore. Occaecat aliquip laboris do minim eu nisi proident anim qui. Aliquip deserunt culpa aliquip enim excepteur officia sunt voluptate sunt pariatur adipisicing consectetur. Elit nostrud Lorem reprehenderit nostrud dolor eu.",
        "latitude": "-52.691387",
        "longitude": "-43.53435"
    },
    {
        "id": "58cc6b2299fb8f88788a1d93",
        "firstName": "Elvia",
        "lastName": "Cummings",
        "favorite": "Dupuyer",
        "company": "ZERBINA",
        "phone": "+1 (834) 578-2304",
        "about": "Excepteur excepteur magna anim ullamco sunt fugiat sit laboris est cupidatat. Exercitation do laborum Lorem id aliqua Lorem ea tempor. Excepteur duis magna ea dolore ex aute deserunt proident et aute aliqua consequat non aute.",
        "latitude": "39.722118",
        "longitude": "136.243197"
    },
    {
        "id": "58cc6b221f1c23655cb5b291",
        "firstName": "Ware",
        "lastName": "Snyder",
        "favorite": "Geyserville",
        "company": "DOGNOST",
        "phone": "+1 (966) 441-3797",
        "about": "Excepteur reprehenderit labore nulla deserunt elit magna sit mollit duis. Quis sit sunt est et consequat do aute nisi et do. Occaecat veniam ad velit excepteur ullamco cillum ea laborum pariatur labore qui cillum. Consectetur est est sunt reprehenderit. Non magna voluptate est velit. Labore Lorem ex amet do occaecat.",
        "latitude": "45.347261",
        "longitude": "-147.443179"
    },
    {
        "id": "58cc6b2287131e7e312ed78b",
        "firstName": "Nina",
        "lastName": "Davidson",
        "favorite": "Turah",
        "company": "SYNTAC",
        "phone": "+1 (972) 416-3863",
        "about": "Labore veniam ex ad Lorem laboris aute ipsum nulla. Minim ea amet deserunt enim. Ad nostrud est nostrud incididunt veniam duis do id quis. Non consequat deserunt ad do fugiat aliqua sint elit. Cillum sit ex duis amet id consectetur labore. Dolore esse laborum duis quis.",
        "latitude": "-46.616388",
        "longitude": "-87.79086"
    },
    {
        "id": "58cc6b2267b9904b84d03fac",
        "firstName": "Crystal",
        "lastName": "Briggs",
        "favorite": "Bergoo",
        "company": "ZILLACOM",
        "phone": "+1 (981) 458-3582",
        "about": "Laboris enim labore amet consectetur occaecat laboris dolor cupidatat deserunt id occaecat occaecat aliquip consequat. Tempor fugiat mollit occaecat id mollit ad ea amet magna veniam. Voluptate sit elit labore commodo sint veniam occaecat aliquip excepteur.",
        "latitude": "33.312411",
        "longitude": "-108.830261"
    },
    {
        "id": "58cc6b22af55b1ca2ecc3e2c",
        "firstName": "Meghan",
        "lastName": "Schroeder",
        "favorite": "Weeksville",
        "company": "CUIZINE",
        "phone": "+1 (835) 455-2140",
        "about": "Laboris anim consequat labore aliquip irure nostrud elit minim mollit officia. Ea dolore esse nulla in ut quis labore. Ut et nulla duis veniam excepteur culpa ex cupidatat aliqua proident adipisicing dolore Lorem. Officia proident magna qui fugiat. Laborum in dolore pariatur aute officia. Laboris eiusmod tempor excepteur elit aliquip enim quis. Mollit sint labore non excepteur veniam incididunt.",
        "latitude": "16.70405",
        "longitude": "-116.790792"
    },
    {
        "id": "58cc6b225eca3bc843ad9d03",
        "firstName": "Gale",
        "lastName": "Goff",
        "favorite": "Klagetoh",
        "company": "HAIRPORT",
        "phone": "+1 (928) 535-3695",
        "about": "Veniam ullamco et incididunt dolore velit quis in fugiat ut dolor officia. Ipsum anim ipsum aliquip proident ea aliqua et non sit ipsum duis velit. Nostrud elit proident laborum reprehenderit ullamco in dolor mollit. Nisi amet consectetur quis laboris aliquip dolore laborum exercitation et consequat laboris eiusmod.",
        "latitude": "-41.783382",
        "longitude": "123.350685"
    },
    {
        "id": "58cc6b2296b6564f427cb021",
        "firstName": "Kelley",
        "lastName": "Durham",
        "favorite": "Carlton",
        "company": "WAZZU",
        "phone": "+1 (947) 435-2948",
        "about": "Fugiat irure ex in laboris nulla ex enim duis duis qui incididunt occaecat eiusmod ut. Minim excepteur consequat deserunt dolor proident officia tempor. Ex mollit ullamco adipisicing ea culpa deserunt cillum et laborum mollit mollit pariatur. Ex labore dolor deserunt irure veniam commodo qui laboris culpa dolor laboris dolore minim.",
        "latitude": "-9.234833",
        "longitude": "179.730391"
    },
    {
        "id": "58cc6b222a77c57e9f854573",
        "firstName": "Dawn",
        "lastName": "Hartman",
        "favorite": "Boykin",
        "company": "NAMEBOX",
        "phone": "+1 (972) 549-3072",
        "about": "Irure ipsum eu ea eiusmod incididunt mollit sit enim fugiat enim in culpa elit. Voluptate anim quis labore ad voluptate sit aute magna mollit sunt consequat. Aute qui nulla non irure id. Excepteur tempor culpa consectetur esse magna ullamco excepteur id aute est aute minim incididunt laborum. Deserunt consectetur laboris irure sint enim voluptate reprehenderit aliquip nisi eiusmod non veniam id commodo. Minim laboris adipisicing enim quis labore proident amet anim proident commodo. Laborum tempor sunt labore aute voluptate.",
        "latitude": "-35.877991",
        "longitude": "0.361922"
    },
    {
        "id": "58cc6b22b2d733e75c460c4a",
        "firstName": "Griffin",
        "lastName": "Mccoy",
        "favorite": "Rockhill",
        "company": "VENDBLEND",
        "phone": "+1 (863) 522-3812",
        "about": "Ipsum fugiat non exercitation consectetur elit id. Cillum aute consequat sint amet sint ut magna. Incididunt Lorem laborum excepteur ipsum duis pariatur consectetur elit duis esse velit ex sunt cillum. Eu culpa fugiat quis nulla. Magna amet exercitation ex pariatur id ad non. Reprehenderit eu laborum nostrud ipsum consequat deserunt quis irure nulla cupidatat reprehenderit elit.",
        "latitude": "-66.751552",
        "longitude": "-158.882696"
    },
    {
        "id": "58cc6b22d2b68a376d7c3835",
        "firstName": "Best",
        "lastName": "Charles",
        "favorite": "Wedgewood",
        "company": "PROTODYNE",
        "phone": "+1 (996) 460-2220",
        "about": "Amet ut ea veniam cillum elit commodo. Est in velit veniam minim ad. Ex quis fugiat amet ex. Eiusmod sit eiusmod magna ad. Lorem non non ex nulla duis. Ad irure consectetur tempor commodo excepteur irure amet. Laboris reprehenderit eu aute pariatur veniam eu reprehenderit anim.",
        "latitude": "40.254908",
        "longitude": "168.832461"
    },
    {
        "id": "58cc6b225168afff15d3a669",
        "firstName": "Paige",
        "lastName": "Cruz",
        "favorite": "Greenbackville",
        "company": "TSUNAMIA",
        "phone": "+1 (985) 537-3328",
        "about": "Qui mollit officia excepteur eu exercitation sit consequat eu duis Lorem ex amet fugiat enim. Laboris amet esse deserunt magna eu sit eiusmod reprehenderit ea. Consectetur pariatur laborum exercitation ad sit ex ut aliquip veniam. Culpa in irure consectetur occaecat culpa. Ipsum id ullamco laboris in esse duis ipsum do irure aute dolore esse aute commodo. Dolor pariatur nulla pariatur fugiat minim ea. Nisi laboris nostrud nostrud cillum nulla Lorem non enim non minim laborum non mollit ea.",
        "latitude": "-34.677356",
        "longitude": "-125.406769"
    },
    {
        "id": "58cc6b220bb1cf91c4d80730",
        "firstName": "Kim",
        "lastName": "Mcgee",
        "favorite": "Convent",
        "company": "VIAGREAT",
        "phone": "+1 (898) 445-3693",
        "about": "Nostrud deserunt excepteur mollit do irure enim amet. Mollit consectetur reprehenderit dolor do ut culpa non consectetur do ad. Do ea aliquip commodo et ex aliquip quis mollit voluptate cillum do labore. Nostrud irure esse sit eiusmod aliquip reprehenderit ipsum deserunt cupidatat.",
        "latitude": "15.560916",
        "longitude": "-146.745609"
    },
    {
        "id": "58cc6b22ebf9202108186b22",
        "firstName": "Rosa",
        "lastName": "Cooley",
        "favorite": "Defiance",
        "company": "CALLFLEX",
        "phone": "+1 (946) 593-3688",
        "about": "Cillum voluptate ex ut enim do nulla. Id irure sint aliqua proident aliqua culpa consectetur ut adipisicing occaecat duis laborum anim. Aliqua culpa voluptate qui magna consectetur nulla ullamco pariatur proident labore ullamco fugiat adipisicing. Dolor labore commodo ex irure commodo mollit dolor minim sit nostrud. Quis ex dolore culpa consequat reprehenderit id ut sit labore aliqua veniam esse. In ad id et dolore duis reprehenderit non exercitation ipsum qui aliqua et adipisicing. Aliquip fugiat laboris voluptate voluptate proident amet elit sunt aute elit non et in ex.",
        "latitude": "64.491718",
        "longitude": "-34.557152"
    },
    {
        "id": "58cc6b22aeaa9a0b95266149",
        "firstName": "Wiley",
        "lastName": "Randall",
        "favorite": "Neahkahnie",
        "company": "NETPLODE",
        "phone": "+1 (820) 593-3333",
        "about": "Eu quis esse amet ipsum sunt et. Proident do voluptate ipsum voluptate commodo tempor. Fugiat aute et sunt elit minim nulla consectetur eiusmod officia ex.",
        "latitude": "-72.544325",
        "longitude": "-163.766736"
    },
    {
        "id": "58cc6b22f3176c77b7cdba6d",
        "firstName": "Angelita",
        "lastName": "French",
        "favorite": "Boyd",
        "company": "FIBRODYNE",
        "phone": "+1 (838) 470-3891",
        "about": "Ullamco culpa laborum sit velit. Occaecat nisi aliquip duis enim. Reprehenderit proident dolore qui ipsum in pariatur ex Lorem commodo sit.",
        "latitude": "66.613762",
        "longitude": "-158.388323"
    },
    {
        "id": "58cc6b2227fb0f3435bfa14e",
        "firstName": "Small",
        "lastName": "Thomas",
        "favorite": "Rushford",
        "company": "QOT",
        "phone": "+1 (867) 463-2205",
        "about": "Eu nulla cupidatat elit aliqua incididunt. Magna laboris enim sit incididunt deserunt amet pariatur eiusmod occaecat sit adipisicing do. Magna mollit do cillum velit commodo reprehenderit ullamco qui nostrud labore. Aute consequat id commodo excepteur velit exercitation exercitation aliqua velit qui. Sunt fugiat occaecat exercitation ut in magna sunt adipisicing non esse sunt. Laboris esse est ad reprehenderit proident ad excepteur nulla do pariatur duis voluptate.",
        "latitude": "20.205485",
        "longitude": "110.114668"
    },
    {
        "id": "58cc6b22bbbe473213223832",
        "firstName": "Compton",
        "lastName": "Fields",
        "favorite": "Orviston",
        "company": "DOGTOWN",
        "phone": "+1 (919) 477-2724",
        "about": "Consectetur nulla aliquip sunt dolor do occaecat elit voluptate labore. Amet sunt eu anim consectetur sit officia magna. Exercitation sint ad velit elit nostrud ex est nulla. Lorem qui incididunt sint commodo laboris reprehenderit Lorem. Sit minim nostrud excepteur amet qui ea occaecat nisi occaecat irure consequat in minim. Do et cillum nulla proident sunt labore consectetur fugiat irure officia aliqua aute excepteur. Pariatur eiusmod culpa excepteur ullamco consequat eiusmod ex ullamco commodo et aute ea Lorem anim.",
        "latitude": "78.467811",
        "longitude": "-91.710493"
    },
    {
        "id": "58cc6b228e429efedb685f61",
        "firstName": "Greer",
        "lastName": "Harrington",
        "favorite": "Crown",
        "company": "MAGNEMO",
        "phone": "+1 (821) 535-2219",
        "about": "Excepteur elit consequat ullamco in eiusmod mollit magna voluptate in nostrud ea fugiat. Cupidatat nulla adipisicing adipisicing do. Qui exercitation fugiat irure irure aliqua irure excepteur qui aliquip. Ex deserunt irure incididunt sit laboris. Magna sit proident occaecat ullamco occaecat amet est adipisicing deserunt.",
        "latitude": "28.971256",
        "longitude": "34.672367"
    },
    {
        "id": "58cc6b2257bf2fcbbc4e3dc3",
        "firstName": "Johns",
        "lastName": "Fleming",
        "favorite": "Foscoe",
        "company": "PHARMEX",
        "phone": "+1 (830) 599-2081",
        "about": "Ea magna labore irure culpa do elit ad incididunt. Amet dolore tempor qui ullamco aliquip ipsum ut occaecat in quis. Proident consequat commodo est do veniam voluptate adipisicing. Sint elit laboris proident culpa proident. Exercitation ut non consequat reprehenderit consectetur fugiat labore dolor et ea quis tempor sunt laboris. Nisi veniam id velit id magna in cupidatat labore duis laboris culpa.",
        "latitude": "-16.879511",
        "longitude": "144.403845"
    },
    {
        "id": "58cc6b2200bac05e893a2eed",
        "firstName": "Maude",
        "lastName": "Ramos",
        "favorite": "Fairhaven",
        "company": "PETIGEMS",
        "phone": "+1 (910) 482-2763",
        "about": "Magna cillum veniam ad incididunt ad anim consectetur est. Qui quis eu tempor eiusmod anim veniam voluptate. Nisi minim elit magna officia ea laboris do sit reprehenderit est. Nisi fugiat mollit velit dolor proident veniam pariatur qui aliqua cillum id. Culpa id amet fugiat ex ullamco. Duis veniam reprehenderit voluptate ut ullamco occaecat.",
        "latitude": "-78.550534",
        "longitude": "-55.586699"
    },
    {
        "id": "58cc6b22d3f08e3215a90db1",
        "firstName": "West",
        "lastName": "Hoover",
        "favorite": "Darrtown",
        "company": "INTRADISK",
        "phone": "+1 (903) 461-2105",
        "about": "Minim consequat labore sunt nulla. Proident est aliquip pariatur tempor consequat sunt consequat cillum occaecat aliqua aliquip enim excepteur laboris. In est eu voluptate velit id proident ad sit cillum. Sint veniam sit ipsum est veniam proident id veniam occaecat. Excepteur irure enim sit officia consectetur sit. Ipsum magna id nostrud elit esse ex velit tempor irure. Consectetur est qui do velit dolor esse sunt adipisicing exercitation aute ullamco cupidatat eu esse.",
        "latitude": "-86.202944",
        "longitude": "-23.333986"
    },
    {
        "id": "58cc6b220c79879af6392133",
        "firstName": "Isabelle",
        "lastName": "Huber",
        "favorite": "Beyerville",
        "company": "ZORROMOP",
        "phone": "+1 (965) 541-2852",
        "about": "Laboris quis nulla ipsum esse do sit velit nostrud deserunt aliqua non. Magna esse velit sunt duis elit. Laborum aliquip commodo irure minim eu laboris dolor.",
        "latitude": "-0.460401",
        "longitude": "82.193038"
    },
    {
        "id": "58cc6b226c58131982b93340",
        "firstName": "Adeline",
        "lastName": "Raymond",
        "favorite": "Newry",
        "company": "SLUMBERIA",
        "phone": "+1 (832) 452-3443",
        "about": "Enim est aliquip ex do commodo anim id. Sint ullamco in quis occaecat eu veniam. Consequat aute culpa cillum cillum do consectetur consequat cillum dolore. Sit sunt irure eiusmod eu.",
        "latitude": "28.933627",
        "longitude": "88.151066"
    },
    {
        "id": "58cc6b22fadd6fc1d5744f5c",
        "firstName": "Dona",
        "lastName": "Peterson",
        "favorite": "Leming",
        "company": "TRANSLINK",
        "phone": "+1 (829) 456-2665",
        "about": "Do in elit ex pariatur consectetur cillum in enim aliquip ut est. Lorem in ex dolore esse eiusmod consectetur cillum magna ex. Culpa commodo anim labore esse in cupidatat sunt tempor et minim proident.",
        "latitude": "8.92344",
        "longitude": "-57.001328"
    },
    {
        "id": "58cc6b2247edb92696990ce9",
        "firstName": "Benson",
        "lastName": "Acosta",
        "favorite": "Cecilia",
        "company": "COMVEYOR",
        "phone": "+1 (914) 473-3043",
        "about": "Labore dolor commodo cupidatat sit ad reprehenderit sunt officia consectetur ullamco enim in ullamco. Fugiat velit in eiusmod cupidatat adipisicing est dolore amet eiusmod eiusmod enim duis fugiat. Cillum ullamco incididunt sint dolor ex nostrud veniam magna eu. Est nulla reprehenderit incididunt occaecat dolore do ut nostrud elit mollit proident deserunt velit.",
        "latitude": "22.59299",
        "longitude": "-146.578081"
    },
    {
        "id": "58cc6b22823a79248bc4988d",
        "firstName": "Snyder",
        "lastName": "Marquez",
        "favorite": "Alleghenyville",
        "company": "VOIPA",
        "phone": "+1 (976) 423-2170",
        "about": "Ut sint consequat veniam irure aliqua ut nisi voluptate veniam elit duis eu tempor. Culpa et deserunt labore veniam eiusmod velit laborum sit ea commodo laborum. Veniam incididunt labore adipisicing minim eu minim.",
        "latitude": "88.20004",
        "longitude": "-80.934007"
    },
    {
        "id": "58cc6b229e0683f7439066b9",
        "firstName": "Brewer",
        "lastName": "Hunter",
        "favorite": "Stollings",
        "company": "TELPOD",
        "phone": "+1 (856) 448-2610",
        "about": "Proident et voluptate pariatur amet voluptate occaecat labore irure elit. Adipisicing dolore culpa ipsum qui. Sit irure occaecat ex commodo irure consequat adipisicing dolore id incididunt. Sint ea aute labore aute anim velit sint ea non consequat proident. Aute culpa duis quis est sint consectetur occaecat deserunt officia sunt minim esse fugiat duis.",
        "latitude": "-21.314837",
        "longitude": "45.169464"
    },
    {
        "id": "58cc6b2213da3f91897dbf46",
        "firstName": "Campos",
        "lastName": "Sherman",
        "favorite": "Montura",
        "company": "INCUBUS",
        "phone": "+1 (986) 423-2208",
        "about": "Elit mollit labore officia ea enim laboris. Occaecat pariatur reprehenderit commodo fugiat et anim amet in voluptate sunt. Proident fugiat labore ut sint culpa non nulla nostrud in ea velit est id mollit. Sunt exercitation esse fugiat nostrud tempor ex laborum deserunt ipsum sit tempor dolor. Sint elit aliqua aliqua pariatur ad ullamco sint.",
        "latitude": "-76.715104",
        "longitude": "48.353462"
    },
    {
        "id": "58cc6b22b1bea9eca974048a",
        "firstName": "Brooke",
        "lastName": "Blair",
        "favorite": "Tuskahoma",
        "company": "ENDICIL",
        "phone": "+1 (847) 407-2067",
        "about": "Ipsum minim occaecat laborum quis magna sint. Adipisicing quis est velit aute tempor occaecat incididunt sit adipisicing consectetur aute dolor sit. Voluptate quis consequat velit amet labore aliqua amet nulla incididunt ut est. Esse adipisicing dolor do nulla sint sint elit mollit ut est. Sunt laboris eu ad officia veniam nostrud esse dolore cupidatat pariatur Lorem proident. Duis labore eiusmod incididunt aliquip aliquip eiusmod. Minim laboris anim exercitation ea.",
        "latitude": "69.634141",
        "longitude": "37.351525"
    },
    {
        "id": "58cc6b2273297601ab240445",
        "firstName": "Trisha",
        "lastName": "Barrett",
        "favorite": "Vowinckel",
        "company": "RONELON",
        "phone": "+1 (953) 411-2572",
        "about": "Id laboris est excepteur enim veniam duis ea tempor ut culpa. In nulla est adipisicing dolore. Irure laborum adipisicing elit voluptate. Minim enim ea laboris adipisicing labore laborum Lorem ipsum cupidatat pariatur id. Quis eu incididunt proident aute consequat ipsum. Nisi culpa nisi nostrud nulla aliquip occaecat laboris id consectetur pariatur laboris ea.",
        "latitude": "83.675139",
        "longitude": "162.931708"
    },
    {
        "id": "58cc6b22ab5d20fba925ef43",
        "firstName": "Henrietta",
        "lastName": "Glover",
        "favorite": "Jenkinsville",
        "company": "SIGNIDYNE",
        "phone": "+1 (845) 520-2936",
        "about": "Commodo esse qui ex ipsum consectetur laboris ipsum mollit eiusmod in anim. Ut et irure est cupidatat excepteur dolor fugiat exercitation nulla anim reprehenderit in incididunt. Lorem qui ullamco duis reprehenderit fugiat. Eu et proident cillum non elit eu do ad. Nisi ullamco amet tempor fugiat consectetur irure anim.",
        "latitude": "35.712007",
        "longitude": "106.044098"
    },
    {
        "id": "58cc6b221f0cd90930e9468e",
        "firstName": "Rowena",
        "lastName": "Schultz",
        "favorite": "Caln",
        "company": "BLEENDOT",
        "phone": "+1 (988) 539-2271",
        "about": "Reprehenderit mollit do ullamco ex ex laboris ullamco nisi. Cillum pariatur magna eu aliqua aliquip qui enim ipsum amet velit incididunt. Fugiat ipsum aliquip eu consequat adipisicing et enim. Elit duis elit elit nostrud sunt ea laborum aliquip consectetur ipsum. Ea nulla labore irure quis ipsum irure excepteur. Proident id proident incididunt eu ipsum est elit do sunt nostrud eiusmod.",
        "latitude": "-86.750274",
        "longitude": "156.47803"
    },
    {
        "id": "58cc6b22c9d3c094236f441c",
        "firstName": "Mcdowell",
        "lastName": "Knowles",
        "favorite": "Walland",
        "company": "COMTENT",
        "phone": "+1 (993) 528-3905",
        "about": "Culpa mollit qui incididunt ut sit enim proident adipisicing velit eu tempor qui ex in. Velit ex laboris sit do ad tempor aute cupidatat ea consequat minim laboris. Ad labore sunt pariatur ea proident fugiat nostrud commodo cupidatat. Nisi reprehenderit tempor enim est voluptate nostrud exercitation ipsum. Nostrud aliqua est anim nisi deserunt tempor nostrud labore sunt deserunt qui. Aliquip ad sint qui elit qui ullamco nisi.",
        "latitude": "60.83442",
        "longitude": "-50.608794"
    },
    {
        "id": "58cc6b22abcf68a5bbee0b79",
        "firstName": "Mona",
        "lastName": "Reyes",
        "favorite": "Blairstown",
        "company": "OULU",
        "phone": "+1 (978) 417-3740",
        "about": "Aliquip id tempor incididunt amet laborum ut aute quis tempor velit sit est elit in. Non consectetur magna proident pariatur proident fugiat exercitation. Dolor officia occaecat in enim voluptate est pariatur esse cillum Lorem. Aliquip velit aliquip Lorem elit. Lorem cupidatat eiusmod minim officia mollit eu dolor ut excepteur commodo proident enim eu. Eiusmod deserunt elit id tempor mollit.",
        "latitude": "-64.958073",
        "longitude": "-99.305989"
    },
    {
        "id": "58cc6b22ac11e0f951be158d",
        "firstName": "Horn",
        "lastName": "Gould",
        "favorite": "Shelby",
        "company": "COMVEY",
        "phone": "+1 (816) 475-3794",
        "about": "Adipisicing voluptate id proident cillum cupidatat consectetur minim Lorem sint ex aliquip. Laboris cupidatat tempor labore laboris. Consequat dolore culpa dolore sint eiusmod ex ullamco proident ad do irure magna velit. Commodo nostrud do dolore deserunt irure pariatur deserunt laboris. Mollit officia proident dolore non incididunt labore aliqua officia nostrud. Fugiat incididunt Lorem eiusmod pariatur commodo aute nulla dolor sit do mollit voluptate officia ullamco. Nostrud laboris est exercitation id proident ex dolore adipisicing commodo amet do ipsum.",
        "latitude": "65.51942",
        "longitude": "77.956969"
    },
    {
        "id": "58cc6b2283fc942706d00985",
        "firstName": "Price",
        "lastName": "May",
        "favorite": "Caroleen",
        "company": "DAIDO",
        "phone": "+1 (963) 517-3178",
        "about": "Culpa et sint aliquip pariatur laborum. Nostrud nisi pariatur ullamco duis aliquip occaecat ut sit. Tempor aliquip aliquip sunt enim enim aliquip enim id. Ullamco voluptate enim nostrud cupidatat excepteur anim. Do dolore ea reprehenderit duis aliqua deserunt commodo incididunt.",
        "latitude": "26.538785",
        "longitude": "51.284361"
    },
    {
        "id": "58cc6b22c15c1a55048e2a7a",
        "firstName": "Rojas",
        "lastName": "Navarro",
        "favorite": "Sterling",
        "company": "ENERSAVE",
        "phone": "+1 (814) 460-3835",
        "about": "Duis elit do do veniam labore. Minim qui pariatur dolor ipsum esse quis ut ea magna minim. Do id culpa cupidatat mollit reprehenderit sunt incididunt non nostrud fugiat id laboris enim sit. Esse mollit laboris exercitation eu irure ex voluptate ad fugiat. Nulla minim eu aute culpa dolore incididunt fugiat commodo deserunt.",
        "latitude": "-56.348068",
        "longitude": "-103.793871"
    },
    {
        "id": "58cc6b22eb1bd7807aa88927",
        "firstName": "Rosanne",
        "lastName": "Bryant",
        "favorite": "Floris",
        "company": "ELEMANTRA",
        "phone": "+1 (846) 540-3660",
        "about": "Quis excepteur ullamco eu ipsum Lorem cillum. Eu excepteur quis officia Lorem nostrud consectetur Lorem velit quis labore nulla sint laborum. Dolore in ullamco et sint aute. Eiusmod esse id voluptate occaecat et. Sunt aliquip labore quis labore. Incididunt cupidatat fugiat ad culpa velit voluptate eu incididunt velit ex nostrud tempor. Commodo consectetur Lorem nostrud ex voluptate do et dolor.",
        "latitude": "-1.70648",
        "longitude": "-128.791115"
    },
    {
        "id": "58cc6b225c88402e40661866",
        "firstName": "Joni",
        "lastName": "Ruiz",
        "favorite": "Norris",
        "company": "QUALITEX",
        "phone": "+1 (905) 533-3491",
        "about": "Pariatur est aute dolore cupidatat do voluptate culpa. Irure irure est enim exercitation minim aute dolore. Sit aliquip fugiat minim qui culpa ea anim sint fugiat laborum adipisicing sint. Cupidatat magna excepteur dolor incididunt reprehenderit incididunt veniam. Sunt velit et ut dolor eiusmod voluptate labore.",
        "latitude": "-75.806243",
        "longitude": "123.126712"
    },
    {
        "id": "58cc6b2217609707b6a356bc",
        "firstName": "Laura",
        "lastName": "Leach",
        "favorite": "Twilight",
        "company": "EARTHPURE",
        "phone": "+1 (875) 540-3135",
        "about": "Ea ad qui velit quis eiusmod enim. Ullamco est pariatur est aute sunt do ipsum voluptate in et. Irure in consequat fugiat deserunt ut occaecat duis velit ad commodo dolore mollit. Duis do sint incididunt ut laboris deserunt fugiat labore sint. Amet consectetur mollit aute ex cupidatat do et do proident adipisicing dolor.",
        "latitude": "-71.226064",
        "longitude": "119.737827"
    },
    {
        "id": "58cc6b2200b6d2cc0bbe03c0",
        "firstName": "Giles",
        "lastName": "Bowen",
        "favorite": "Winchester",
        "company": "TYPHONICA",
        "phone": "+1 (829) 582-2460",
        "about": "Lorem aute consequat amet Lorem consectetur esse qui nulla in voluptate sit. Esse sunt commodo adipisicing culpa. Sint sunt dolor officia Lorem id commodo cillum culpa velit proident exercitation. Veniam aliquip est id do elit tempor. Laboris proident incididunt nostrud irure sit consequat ut minim do veniam aliqua sunt velit qui.",
        "latitude": "73.765869",
        "longitude": "-143.965344"
    },
    {
        "id": "58cc6b2201cf7d4b27328da0",
        "firstName": "Patrick",
        "lastName": "Christian",
        "favorite": "Aguila",
        "company": "MANGELICA",
        "phone": "+1 (955) 534-3301",
        "about": "Cillum officia aute dolore esse Lorem officia mollit mollit eiusmod. Veniam non eiusmod cupidatat voluptate eu eiusmod. Magna ea anim incididunt non mollit ea veniam Lorem est cupidatat excepteur et culpa. Aliqua velit sint ex exercitation labore nisi ut ad cillum sunt laborum tempor duis eiusmod.",
        "latitude": "42.608551",
        "longitude": "174.109111"
    },
    {
        "id": "58cc6b2200a96bfa4db2d031",
        "firstName": "Gould",
        "lastName": "Richards",
        "favorite": "Breinigsville",
        "company": "FIBEROX",
        "phone": "+1 (936) 476-3440",
        "about": "Sunt magna laboris eiusmod consectetur commodo aute. Laborum ipsum Lorem ea ea irure qui ipsum et labore eu minim enim. Deserunt aliquip tempor consequat irure commodo laborum fugiat nisi. Incididunt ut tempor reprehenderit labore. Pariatur irure nisi esse sunt reprehenderit deserunt nostrud incididunt sint sint pariatur. Id officia ut nisi laborum culpa culpa duis. Pariatur incididunt eu aliquip nulla esse nisi.",
        "latitude": "35.432065",
        "longitude": "6.108559"
    },
    {
        "id": "58cc6b22b5e897d23e51e569",
        "firstName": "Letitia",
        "lastName": "Dejesus",
        "favorite": "Kanauga",
        "company": "EXOSIS",
        "phone": "+1 (839) 466-3194",
        "about": "Cillum officia nulla irure incididunt cupidatat aliquip voluptate exercitation nostrud velit dolor. Minim dolore laborum Lorem voluptate officia. Qui quis dolore adipisicing officia nulla esse aliquip amet labore eu nostrud excepteur aliqua. Nisi consectetur laboris quis officia in reprehenderit in amet reprehenderit officia elit ex.",
        "latitude": "6.685548",
        "longitude": "-80.109002"
    },
    {
        "id": "58cc6b224d199b67617023d9",
        "firstName": "Leola",
        "lastName": "Day",
        "favorite": "Clarktown",
        "company": "GEEKWAGON",
        "phone": "+1 (910) 501-2258",
        "about": "Voluptate enim id exercitation exercitation et. Amet labore eu nostrud est incididunt sint culpa. Ex sit nulla sint ullamco sit nisi ut nisi aliquip esse sit enim amet deserunt. Dolor tempor in irure consequat amet eiusmod quis deserunt officia exercitation.",
        "latitude": "36.886731",
        "longitude": "-96.247136"
    },
    {
        "id": "58cc6b222b9671e13647234c",
        "firstName": "Emma",
        "lastName": "Chavez",
        "favorite": "Canoochee",
        "company": "MEDMEX",
        "phone": "+1 (845) 539-2099",
        "about": "Pariatur tempor nulla pariatur dolor. Sunt qui labore do amet cupidatat amet. Ipsum anim consectetur exercitation irure deserunt sunt ad labore duis adipisicing. Aute sunt veniam consequat sint. Laboris duis officia ad consequat ex dolore eu enim enim officia. Ea sunt laboris laborum nostrud ullamco dolor do in ullamco pariatur dolore ex. Culpa reprehenderit est dolore commodo nulla et culpa id.",
        "latitude": "4.126675",
        "longitude": "-25.442123"
    },
    {
        "id": "58cc6b2227fb3fc9eeabd4a1",
        "firstName": "Sofia",
        "lastName": "Ferguson",
        "favorite": "Rosburg",
        "company": "NETROPIC",
        "phone": "+1 (888) 471-2335",
        "about": "Non ullamco nulla et duis consectetur. Non et voluptate aliquip cillum. Ipsum et velit adipisicing veniam cupidatat incididunt Lorem duis cupidatat velit nulla esse. Qui dolore laboris est et do id dolore culpa exercitation nisi cupidatat non nisi. Tempor qui aliqua ipsum et nulla enim reprehenderit quis enim. Eu duis deserunt nisi amet ad cillum.",
        "latitude": "-28.124666",
        "longitude": "-43.303674"
    },
    {
        "id": "58cc6b225d885d1548985322",
        "firstName": "Santana",
        "lastName": "Hayden",
        "favorite": "Barrelville",
        "company": "PYRAMAX",
        "phone": "+1 (899) 563-3807",
        "about": "Et incididunt tempor pariatur eu laborum consectetur duis dolor velit fugiat excepteur nisi. Culpa ut ut non ut id mollit laboris pariatur fugiat consectetur non ex. Aliquip elit officia aliquip ut ea ad nisi et do nisi ipsum sint commodo. Aliquip deserunt ullamco qui adipisicing in dolor ut ullamco do nostrud cupidatat. Eu magna proident proident excepteur consectetur fugiat quis enim nulla dolor fugiat incididunt. Do nostrud incididunt et eiusmod laboris veniam dolore consectetur et magna dolore. Laboris laborum exercitation mollit consectetur ipsum nulla adipisicing do ad ad eiusmod exercitation officia.",
        "latitude": "55.300252",
        "longitude": "18.516118"
    },
    {
        "id": "58cc6b225ed35b1d2cf44662",
        "firstName": "Henry",
        "lastName": "Berger",
        "favorite": "Fairforest",
        "company": "ISOPLEX",
        "phone": "+1 (841) 545-2251",
        "about": "Dolor occaecat labore labore proident. Anim amet exercitation irure fugiat. Nulla quis non consectetur excepteur veniam nisi sunt veniam fugiat cupidatat sunt. Dolor reprehenderit labore laborum est pariatur in sunt ullamco ea amet esse adipisicing cillum anim. Ad incididunt voluptate veniam do exercitation eu amet officia veniam. Est reprehenderit qui anim ea nisi. Adipisicing exercitation duis anim eiusmod est aliqua reprehenderit veniam consectetur eiusmod fugiat in amet.",
        "latitude": "-12.381123",
        "longitude": "28.949454"
    }
];
