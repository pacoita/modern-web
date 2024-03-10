interface formData {
    firstname: string;
    lastname: string;
    email: string;
    feedback: string;
}

const CORS_HEADERS = {
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
    },
};

const server = Bun.serve({
    port: 3600,
    async fetch(res) {
        const { method } = res;
        const { pathname } = new URL(res.url);

        if (method === 'POST' && pathname === "/back-sync/form-data") {
            const newPost = await res.json();
            printPayload(newPost as formData);
            return new Response('{ "result": "Form data delivered."}', CORS_HEADERS);
        }
        return new Response('{ "result": "Not Found"}', CORS_HEADERS)
    },
});

function printPayload(payload: formData) {
    const now = new Date();
    console.log('\n\n-------------------------------------------');
    console.log(`Received data from the client (${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`);
    console.log('-------------------------------------------');
    console.log(payload);
    console.log('-------------------------------------------');
    console.log('-------------------------------------------');
}

console.log(`Listening on http://localhost:${server.port} ...`);
