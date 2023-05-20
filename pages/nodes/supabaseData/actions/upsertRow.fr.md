Cette action de l'API de données de Supabase vous permet d'effectuer une opération "upsert" sur une ligne spécifique d'une table de votre projet Supabase.

Lorsque vous utilisez l'action "upsertRow", vous devez spécifier le nom de la table où la ligne existe ou doit être insérée, ainsi que l'identifiant unique ou les critères pour déterminer la ligne à mettre à jour ou à insérer. En outre, vous devez fournir les valeurs des colonnes de la ligne.

L'action "upsertRow" combine les fonctionnalités des opérations "update" et "insert". Si une ligne correspondant aux critères spécifiés existe, elle sera mise à jour avec les valeurs fournies. Si une ligne n'existe pas, une nouvelle ligne sera insérée avec les valeurs fournies.

Cette action est particulièrement utile lorsque vous souhaitez mettre à jour une ligne si elle existe ou insérer une nouvelle ligne si elle n'existe pas, le tout en un seul appel API.
