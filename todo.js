
 var { graphql, buildSchema } = require('graphql');

var todoList=[];
todoList.push({id:1,user:1,name:'Suba',targetDate:'2017-10-15',todo:'Project1',active:1});
todoList.push({id:2,user:2,name:'Ganesh',targetDate:'2017-10-14',todo:'Project2',active:1});
todoList.push({id:3,user:1,name:'Suba',targetDate:'2017-10-18',todo:'Project3',active:1});

todoList.push({id:3,user:1,name:'Suba',targetDate:'2017-10-10',todo:'Project1 OLD',active:0});

todoList.push({id:3,user:1,name:'Suba',targetDate:'2017-10-11',todo:'Project2  OLD',active:0});

todoList.push({id:3,user:1,name:'Suba',targetDate:'2017-10-11',todo:'Project3 OLD',active:0});
let schema = buildSchema(`
  type Query {
    id: String,
    name: String,
    todo:String
  }
`);

var root = {
  id: () => {
     
    return 1;
  },
  name: () => {
     
    return 'Suba';
  },
  todo: () => {
     
    return 'Project1';
  }
};

exports.getToDo = function (req, res,next) {
    var id=req.query.id;
    var user=req.query.userId;
    var active=req.query.active;
    var result=[];
    var i=0;

    console.log(req.query);
    todoList.forEach(function(t){
        
        i++;
        if(t.id==id){ 
            result.push(t);
            
        }else if(t.user==user){
             result.push(t);
             
        } else if(t.active==active){
             result.push(t);
             
        } 
       
       
        if(i>=todoList.length)
        res.status(200).send({'response': result});
       
        

    });
    /*
// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, 'query', root).then((response) => {
  console.log(response);
   res.status(200).send({'response': response});
});*/

}

exports.addToDo = function (req, res,next) {

    var schema = buildSchema(`
    type Query {
        user: suba,
        todo: Project1 
    }
    `);

}