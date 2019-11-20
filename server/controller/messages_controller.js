let array = []
let id = 0

module.exports ={
    create: (req,res) =>{
        const{text,time} = req.body;
        array.push({text,time,id});
        id++
        res.status(200).send(array)
    },
    read: (req,res) =>{
        res.status(200).send(array)

    },
    update: (req,res) =>{
        const{text} = req.body;
        const updateID = req.params.id;
        const messageIndex =
        array.findIndex(message => message.id == updateID)
        let message = array[messageIndex]

        array[messageIndex]={
            id: message.id,
            text: text || message.text,
            time: message.time
        }

        res.status(200).send(array)
    },
    delete: (req,res) => {
        const deleteID = req.params.id;
        const messageIndex =
        array.findIndex(message => message.id== deleteID)
        array.splice(messageIndex,1)

        res.status(200).send(array)
    }
}