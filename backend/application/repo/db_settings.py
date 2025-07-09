import psycopg2

def getConnection():
    conn = psycopg2.connect(
        host='localhost',
        database='productsDB',
        user='postgres',
        password='password')
    
    return conn