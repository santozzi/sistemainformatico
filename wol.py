from wakeonlan import send_magic_packet
import time
#Server

gbpb0 = '30-9C-23-04-87-FC'
gcpb1 = '70-85-C2-5E-73-E7'

gcpb2 = 'EC.A8.6B.74.12.CE'
gcpb3 = 'EC.A8.6B.73.DF.C4'

gcpb4 = 'E0.3F.49.56.1C.B6'
gcpb5 = 'EC.A8.6B.72.BA.39'
gcpb6 = 'EC.A8.6B.71.A3.D6'
gcpb7 = 'E0-3F-49-55-E0-E2'
gcpb8 = 'EC-A8-6B-72-23-52'
gcpb9 = 'EC-A8-6B-72-B8-ED'
gcpb10 = 'EC-A8-6B-74-12-B1'
gcpb11 = 'EC.A8.6B.72.C2.8E'
gcpb12 = 'EC-A8-6B-72-B8-E2'
gcpb13 = 'EC-A8-6B-71-A5-FC'
#no tiene POW
gcpb14 = '00-D8-61-5D-12-9C'
gcpb15 = 'E0-3F-49-56-00-4F'
gcpb16 = '70-85-C2-5E-73-3F'
gcpb17 = '30-9C-23-04-87-FD'
gcpb18='70-85-C2-09-7D-44'
gcpb19='70-85-C2-5E-72-6C'
gcpb20 = 'D0-37-45-A7-02-D9'
gcpb21 = '00-D8-61-5D-13-20'
gcpb22 = 'E0-3F-49-56-14-7F'
gcpb24= 'E0-3F-49-56-0E-F3'

server = gbpb0
maquinas = [
    {
        'nombre': "gcpb0",
        'mac': '30-9C-23-04-87-FC'
    },
    {
        'nombre': "gcpb1",
        'mac': '70-85-C2-5E-73-E7'
    },
    {
        'nombre': "gcpb2",
        'mac': 'EC.A8.6B.74.12.CE'
    },
    {
        'nombre': "gcpb3",
        'mac': 'EC.A8.6B.73.DF.C4'
    },
    {
        'nombre': "gcpb4",
        'mac': 'E0.3F.49.56.1C.B6'
    },
    {
        'nombre': "gcpb5",
        'mac': 'EC.A8.6B.72.BA.39'
    },
    {
        'nombre': "gcpb6",
        'mac': 'EC.A8.6B.71.A3.D6'
    },
    {
        'nombre': "gcpb7",
        'mac': 'E0-3F-49-55-E0-E2'
    },
    {
        'nombre': "gcpb8",
        'mac': 'EC-A8-6B-72-23-52'
    },
    {
        'nombre': "gcpb9",
        'mac': 'EC-A8-6B-72-B8-ED'
    },
    {
        'nombre': "gcpb10",
        'mac': 'EC-A8-6B-74-12-B1'
    },
    {
        'nombre': "gcpb11",
        'mac': 'EC.A8.6B.72.C2.8E'
    },
    {
        'nombre': "gcpb12",
        'mac': 'EC-A8-6B-72-B8-E2'
    },
    {
        'nombre': "gcpb13",
        'mac': 'EC-A8-6B-71-A5-FC'
    },
    {
        'nombre': "gcpb14",
        'mac': '00-D8-61-5D-12-9C'
    },
    {
        'nombre': "gcpb15",
        'mac': 'E0-3F-49-56-00-4F'
    },
    {
        'nombre': "gcpb16",
        'mac': '70-85-C2-5E-73-3F'
    },
    {
        'nombre': "gcpb17",
        'mac': '30-9C-23-04-87-FD'
    },
    {
        'nombre': "gcpb18",
        'mac': '70-85-C2-09-7D-44'
    },
    {
        'nombre': "gcpb19",
        'mac': '70-85-C2-5E-72-6C'
    },
    {
        'nombre': "gcpb20",
        'mac': 'D0-37-45-A7-02-D9'
    },
    {
        'nombre': "gcpb21",
        'mac': '00-D8-61-5D-13-20'
    },
    {
        'nombre': "gcpb22",
        'mac': 'E0-3F-49-56-14-7F'
    },
    {
        'nombre': "gcpb23",
        'mac': 'EC-A8-6B-72-1B-62'  
    },
    {
        'nombre': "gcpb24",
        'mac': 'E0-3F-49-56-0E-F3'
    },
    {
        'nombre': "gcpb25",
        'mac': '78-24-AF-3E-2B-AC'
    },
    {
        'nombre': "gcpb26",
        'mac': 'E0-3F-49-56-14-76'
    },
    {
        'nombre': "gcpa1",
        'mac': '70-85-C2-09-10-91',
        
    },
    {
        'nombre': "gcpa2",
        'mac': '30-9C-23-80-A0-4E',
    },
    {
        'nombre': "gcpa3",
        'mac': '4C-ED-FB-BC-5A-FD',
    },
    {
        'nombre': "gcpa4",
        'mac': '78-24-AF-3E-2B-AB',
    },
    {
        'nombre': "gcpa5",
        'mac': '30-9C-23-AC-37-2A',
    },
    {
        'nombre': "gcpa6",
        'mac': '30-9C-23-AC-34-6C',
    },
    {
        'nombre': "gcpa7",
        'mac': 'D0-50-99-72-EB-0C',
    },
    {
        'nombre': "gcpa8",
        'mac': '38-D5-47-E2-13-EE',
    },
    {
        'nombre': "gcpa9",
        'mac': 'D8-5E-D3-D7-4C-91',
    },
    {
        'nombre': "gcpa10",
        'mac': '78-24-AF-3E-2B-D3',
    },
    {
        'nombre': "gcpa11",
        'mac': 'D8-BB-C1-04-3C-C7',
    },
    {
        'nombre': "gcpa12",
        'mac': '18-C0-4D-22-DB-2D',
    },
    {
        'nombre': "gcpa13",
        'mac': '04-7C-16-0D-17-00',
    },
    {
        'nombre': "gcpa14",
        'mac': '18-C0-4D-C5-8B-12',
    },
    {
        'nombre': "gcpa15",
        'mac': 'D8-BB-C1-63-60-EC',
    },
    {
        'nombre': "gcpa16",
        'mac': '18-C0-4D-85-4A-64',
    },
    {
        'nombre': "gcpa17",
        'mac': 'D0-50-99-72-EB-0C',
    },
    {
        'nombre': "gcpa18",
        'mac': '24-4B-FE-7B-DD-DF',
    },
    {
        'nombre': "gcpa19",
        'mac': 'D8-BB-C1-63-61-05',
    },
    {
        'nombre': "gcpa20",
        'mac': '4C-ED-FB-BC-5B-5C',
    },
    {
        'nombre': "gcpa21",
        'mac': 'D8-BB-C1-60-19-3B',
    },
    {
        'nombre': "gcpa22",
        'mac': '78-24-AF-3E-2D-56',
    },

            {
        'nombre': "gcpa23",
        'mac': '30-9C-23-02-A5-90',
    },
                {
        'nombre': "gcpa24",
        'mac': '30-9C-23-02-A5-95',
    },
                    {
        'nombre': "gcpa25",
        'mac': '4C-CC-6A-D3-47-89',
    },
                        {
        'nombre': "gcpa26",
        'mac': '38-D5-47-E2-13-A4',
    },
                        {
        'nombre': "gcpa27",
        'mac': '78-24-AF-3E-2B-E2',
    },
                        {
        'nombre': "gcpa28",
        'mac': '4C-CC-6A-FA-B7-45',
    },
     
    ]
#time.sleep(10)

for pc in maquinas:
    #if(pc['nombre'] == 'gcpa1'):
    send_magic_packet(pc['mac'])
    time.sleep(0.1)
    print(pc['nombre']) 


    """
     no prendieron
     22,21,20,19,18,17,16,15,14,8,5,4
    """