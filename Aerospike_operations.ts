import Aerospike, { policy } from "aerospike";

export async function incrementCounter(client: Aerospike.Client, namespace: string, set: string, recordId: string, binName: string, incrementBy: number): Promise<void> {
    const key = new Aerospike.Key(namespace, set, recordId);
    try {
        await client.operate(key, [
            Aerospike.operations.incr('counter', 1)
        ],policy, (error:any) => {
            if (error) {
              console.error('Failed to increment:', error)
              client.close()
              process.exit(1)
            }
            console.log('Increment successful')
            client.close()
        })
    }
    catch (error: any) {
        console.error(`Failed to increment ${binName}:`, error);
        throw new Error(error.message);
    }
}