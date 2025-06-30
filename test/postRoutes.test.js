const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Post API routes', () => {
    let testPostId;
    const testUserId = 1;

    const testPost = {
        title: "Post de test",
        description: "Ceci est un post créé par le test",
        user_id: testUserId,
        imageUrl: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    };

    beforeAll(async () => {
        if (!mongoose.connection.readyState) {
            await mongoose.connect(process.env.MONGODB_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
        }
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    it('POST /posts => crée un nouveau post', async () => {
        const res = await request(app)
            .post('/posts')
            .send(testPost)
            .expect(201);

        expect(res.body).toHaveProperty('_id');
        expect(res.body.title).toBe(testPost.title);
        testPostId = res.body._id;
    });

    it('GET /posts => récupère tous les posts', async () => {
        const res = await request(app).get('/posts').expect(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it('GET /posts/user/:user_id => récupère les posts d’un utilisateur', async () => {
        const res = await request(app).get(`/posts/user/${testUserId}`).expect(200);
        expect(Array.isArray(res.body)).toBe(true);
        if (res.body.length > 0) {
            expect(res.body[0].user_id).toBe(testUserId);
        }
    });

    it('DELETE /posts/:id => supprime un post', async () => {
        const res = await request(app).delete(`/posts/${testPostId}`).expect(200);
        expect(res.body).toHaveProperty('message', 'Post supprimé');
        expect(res.body.post._id).toBe(testPostId);
    });
});