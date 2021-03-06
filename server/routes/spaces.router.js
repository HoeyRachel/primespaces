const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/userspaces', (req, res) => {
  console.log ('in router.spaces GET:', req.query);
  const query = `SELECT * FROM spaces WHERE user_id = ${req.query.id}`;
  pool.query(query)
    .then( result => {
      console.log ('spaces return data:', result.rows)
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all spaces', err);
      res.sendStatus(500)
    })

});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  console.log ('in spacesRouter.POST')
  const addSpacesQuery = `INSERT INTO "spaces" ("user_id", "space_name", "image_path", "is_complete", "space_goal") VALUES ($1, $2, $3, $4, $5)`;
  values = [req.body.user_id, req.body.space_name, req.body.image_path, req.body.is_complete, req.body.space_goal];
  pool.query( addSpacesQuery, values).then( (results)=>{
    res.sendStatus( 200);
  }).catch( (err)=>{
    console.log( err);
    res.send( 500);
  })
});

router.put('/:id', async (req, res) => {

  try {
    const {id} = req.params
    const {is_complete} = req.body
    const updateIsCompleteQuery =  `UPDATE spaces
    SET is_complete = $1
    WHERE id = $2 RETURNING id;`
    const response = await pool.query(updateIsCompleteQuery, [is_complete,id])
    console.log ('in router.PUT:',req.body)
    res.send(response.rows).status(201)
  } catch (error) {
    console.log('Update event note error ', error);
      res.sendStatus(500);
  }
});


router.delete('/delete/:id', (req, res) => {
  console.log("router DELETE spaces", req.params.id)
  const deleteSpaces = `DELETE FROM spaces WHERE id=$1`;
  values= [req.params.id]
  pool.query(deleteSpaces, values).then((result) => {
      res.sendStatus(200);
  }).catch((error) => {
      console.log('Error DELETE /api/spaces', error);
      res.sendStatus(500);
  })
});

module.exports = router;
