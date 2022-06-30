// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json())

app.get('/artists/:artistId', (req, res, next) => {
  res.json(getArtistByArtistId(req.params.artistId))
})

app.put('/artists/:artistId', (req, res, next) => {
  res.json(editArtistByArtistId(req.params.artistId, req.body))
})

app.delete('/artists/:artistId', (req, res, next) => {
  deleteArtistByArtistId(req.params.artistId)
  res.json({
    "message": "Successfully Deleted!"
  })
})

app.get('/artists/:artistId/albums', (req, res, next) => {
  res.json(getAlbumByAlbumId(req.params.artistId))
})

app.get('/albums/:albumId', (req, res, next) => {
  res.json(getAlbumByAlbumId(req.params.albumId))
})

app.post('/artists/:artistId/albums', (req, res, next) => {
  res.json(addAlbumByArtistId(req.params.artistId, req.body))
})

app.put('/albums/:albumId', (req, res, next) => {
  res.json(editAlbumByAlbumId(req.params.albumId, req.body))
})

app.delete('/albums/:albumId', (req, res, next) => {
  deleteAlbumByAlbumId(req.params.albumId)
  res.json({
    "message": "Successfully deleted!"
  })
})

app.get('/albums', (req, res, next) => {
  if (getFilteredAlbums(req.query.startsWith.toUpperCase()).length) {

    res.send(getFilteredAlbums(req.query.startsWith.toUpperCase()))
  }
  else {
    res.status(404)
    res.send("Album not found!")
  }
})

app.get('/artists/:artistId/songs', (req, res, next) => {
  res.send(getSongsByArtistId(req.params.artistId))
  // res.json(getSongsByArtistId(req.params.artistId))
})

app.get('/albums/:albumId/songs', (req, res, next) => {
  res.send(getSongsByAlbumId(req.params.albumId))
})

app.get('/songs/:songId', (req, res, next) => {
  res.send(getSongBySongId(req.params.songId))
})

app.post('/albums/:albumId/songs', (req, res, next) => {
  res.send(addSongByAlbumId(req.params.albumId, req.body))
})

app.put('/songs/:songId', (req, res, next) => {
  res.send(editSongBySongId(req.params.songId, req.body))
})

app.delete('/songs/:songId', (req, res, next) => {
  deleteSongBySongId(req.params.songId)
  res.json({
    "message": "Successfully deleted!"
  })
})

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
