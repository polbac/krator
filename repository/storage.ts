import { Web3Storage } from 'web3.storage'
const token = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_TOKEN

const web3Client = new Web3Storage({ token: token as string })

export async function getFilesLists(): Promise<string[]> {
    const uploadNames = []
    
    for await (const item of web3Client.list({ maxResults: 10 })) {
        uploadNames.push(item.name)
    }

    return uploadNames
}



export async function getFiltContentOrCreate(cid:string): Promise<string> {
    const fileContent = await web3Client.get(cid)

    
}

