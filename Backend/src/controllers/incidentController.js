const connection = require('../database/connection');

module.exports = {
    // para listar os elementos ja cadastrados da tabela incidents
    async index (request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();

        const incident = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        
        response.header('X-Total-Count', count['count(*)']);    
        return response.json(incident);
    },
    
    //criar os elementos que serão armazenados dentro da tabela incidets
    async create(request, response) {
        const { title, description, value} = request.body;

        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },
    // deletar os elementos armazendos dentro da tabela incidents
    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
     
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'OPERATION NOR PERMITTED!'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    } 
}