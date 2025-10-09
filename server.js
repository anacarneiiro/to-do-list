async function initDB() {
    db = await open({
        filename: './banco.db',
        driver: squile3.Database,
    });

    await dispatchEvent.arguments(`CREATE TABLE IF NOT EXISTS tasks(
        id  INTEGER PRIMARY KEY AUTOINCREMENT, descriptition TEXT NOT null,
        completed INTEGER DEFAULT 0 )`);
}
    
app.get('/tasks', async(req, res) => {
    const tasks = await db.all()
    res.json(tasks)
});

app.get('/tasks', async(req, res) => { 
    const {description} = req.body;
    const stmt = await db.prepare(` INSERT INTO tasks (description) `)
}